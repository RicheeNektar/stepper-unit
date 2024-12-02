#include <WebServer.h>
#include <Arduino.h>
#include <Pins.h>
#include <StaticRequestHandlers.h>

extern bool armed;
extern bool sequencing;
extern WebServer webServer;

void handleGetPins() {
    std::string str = "[";

    for (auto i = 0; i < relayCount; i++) {
        const auto pin = relays[i];

        str += "{\"id\": " + std::to_string(pin) + ",\"state\": " + (digitalRead(pin) == HIGH ? "true" : "false") + "}";

        if (i < relayCount - 1) {
            str += ",";
        }
    }

    str += "]";

    webServer.send(200, "application/json", str.c_str());
}

void handleGetArmed() {
    std::string str = "{\"armed\":";
    str += armed ? "true" : "false";
    str += "}";
    webServer.send(200, "application/json", str.c_str());
}

void handleToggleArmed() {
    if (sequencing) {
        handleGetArmed();
        return;
    }

    armed = !armed;
    if (!armed) {
        for (const auto relay : relays) {
            digitalWrite(relay, LOW);
        }
    }
    handleGetArmed();
}

void handleSequencer() {
    if (sequencing) {
        webServer.send(200, "application/json", R"({"ok":false,"message":"Sequencing in progress"})");
        return;
    }

    if (!armed) {
        webServer.send(200, "application/json", R"({"ok":false,"message":"Not armed"})");
        return;
    }

    for (auto i = 0; i < relayCount; i++) {
        try {
            const auto relay = webServer.arg(("relay[" + std::to_string(i) + "]").c_str());

            if (relay != "skip") {
                const auto id = relay.toInt();

                digitalWrite(relays[id], HIGH);
                delay(100);
                digitalWrite(relays[id], LOW);
            }

            const auto ms = webServer.arg(("delay[" + std::to_string(i) + "]").c_str()).toInt();
            delay(ms);
        } catch (...) {
            webServer.send(400, "application/json", R"({"ok":false,"message":"Invalid sequencing"})");
        }
    }

    webServer.send(200, "application/json", R"({"ok":true})");
}

void handleGetSequencer() {
    std::string r = "{\"sequencing\":";
    r += sequencing ? "true" : "false";
    r += "}";
    webServer.send(200, "application/json", r.c_str());
}