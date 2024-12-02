#include <WebServer.h>
#include <RelayRequestHandler.h>
#include <Pins.h>

extern bool armed;
extern bool sequencing;
extern WebServer webServer;

bool RelayRequestHandler::canHandle(const HTTPMethod method, const String uri) {
    return method == HTTP_PATCH && uri.startsWith("/toggle/");
}

bool RelayRequestHandler::handle(WebServer& server, const HTTPMethod requestMethod, const String requestUri) {
    if (sequencing) {
        server.send(200, "application/json", R"({"ok":false,"message":"Sequencing in progress"})");
        return true;
    }

    if (!armed) {
        server.send(200, "application/json", R"({"ok":false,"message":"Not armed"})");
        return true;
    }

    if (requestUri.endsWith("/all")) {
        auto active = 0;
        for (const auto relay : relays) {
            active += digitalRead(relay);
        }

        const auto newState = !(active > 0) && active != relayCount;

        for (const auto relay : relays) {
            digitalWrite(relay, newState ? HIGH : LOW);
        }

        server.send(200, "application/json", R"({"ok":true})");
        return true;

    }

    const auto id = requestUri.substring(requestUri.length() - 1);

    if (id.toInt() || id.toInt() == 0) {
        const auto state = digitalRead(relays[id.toInt()]);
        const auto newState = (state == HIGH ? LOW : HIGH);
        digitalWrite(relays[id.toInt()], newState);

        server.send(200, "application/json", R"({"ok":true})");
        return true;
    }

    return false;
}