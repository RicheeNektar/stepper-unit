#include <Arduino.h>
#include <WiFi.h>
#include <WebServer.h>
#include <SPIFFS.h>

#include <Main.h>
#include <Pins.h>
#include <StaticRequestHandlers.h>

void loop()
{
    if (armed) {
        digitalWrite(LED_PIN, LOW);
        delay(1000);
        digitalWrite(LED_PIN, HIGH);
    }
    delay(1000);
}

[[noreturn]]
void loopHttp(void *_) {
    while (true) {
        try {
            webServer.handleClient();
        } catch(...) {
            Serial.write("Error");
        }
    }
}

void setupAPIRoutes() {
    webServer.addHandler(relayHandler);
    webServer.on(Uri("/pins"), HTTP_GET, handleGetPins);
    webServer.on(Uri("/arm"), HTTP_GET, handleGetArmed);
    webServer.on(Uri("/arm"), HTTP_PATCH, handleToggleArmed);
    webServer.on(Uri("/sequencer"), HTTP_GET, handleGetSequencer);
    webServer.on(Uri("/sequencer"), HTTP_POST, handleSequencer);
}

void setupFSRoutes() {
    String file;
    auto dir = SPIFFS.open("/");

    do {
        file = dir.getNextFileName();
        if (file != "") {
            if (file.endsWith("index.html")) {
                const auto str = file.substring(0, file.length() - 10);
                Serial.println(str);
                webServer.serveStatic(str.c_str(), SPIFFS, file.c_str());
            } else {
                Serial.println(file);
                webServer.serveStatic(file.c_str(), SPIFFS, file.c_str());
            }
        }
    } while (file != "");
}

void setup()
{
    Serial.begin(9600);

    setupPins();
    digitalWrite(LED_PIN, LOW);

    Serial.println("AP...");
    WiFi.softAP(ssid, password);

    Serial.println("FS...");
    SPIFFS.begin();

    Serial.println("DNS...");
    dnsServer.start(53, "*", WiFi.localIP());

    Serial.println("HTTP...");
    webServer.begin();

    setupAPIRoutes();
    setupFSRoutes();

    xTaskCreatePinnedToCore(
        loopHttp,
        "HTTPServer",
        4096,
        nullptr,
        1,
        nullptr,
        1
    );

    Serial.println("DONE");
    digitalWrite(LED_PIN, HIGH);
}