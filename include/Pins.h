#pragma once

#define RELAY_PIN_1 33
#define RELAY_PIN_2 32
#define RELAY_PIN_3 13
#define RELAY_PIN_4 12
#define RELAY_PIN_5 21
#define RELAY_PIN_6 19
#define RELAY_PIN_7 18
#define RELAY_PIN_8 5
#define LED_PIN     25

constexpr int relays[] = {
    RELAY_PIN_1,
    RELAY_PIN_2,
    RELAY_PIN_3,
    RELAY_PIN_4,
    RELAY_PIN_5,
    RELAY_PIN_6,
    RELAY_PIN_7,
    RELAY_PIN_8,
};
constexpr auto relayCount = 8;

void setupPins();