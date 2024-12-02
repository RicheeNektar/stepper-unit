#pragma once

#include <WebServer.h>
#include <RelayRequestHandler.h>
#include <DNSServer.h>

constexpr auto ssid = "StepperUnit";
constexpr auto password = "YourPassword";

bool armed = false;
bool sequencing = false;

RequestHandler *relayHandler = new RelayRequestHandler;
WebServer webServer(80);
DNSServer dnsServer;
