#pragma once

#include <WebServer.h>

class RelayRequestHandler final : public RequestHandler {
public:
    bool canHandle(HTTPMethod method, String uri) override;

    bool handle(WebServer &server, HTTPMethod requestMethod, String requestUri) override;
};