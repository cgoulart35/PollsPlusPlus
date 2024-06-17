package com.stormerg.polls.properties.impl;

import com.stormerg.polls.properties.PropertiesManager;
import jakarta.annotation.PostConstruct;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;

@Slf4j
@Setter
@Getter
@Service
@ConfigurationProperties(prefix = "polls-api")
public class PropertiesManagerImpl implements PropertiesManager {

    // PROPERTIES
    private String firebaseUrl;

    @PostConstruct
    public void init() {
        log.info("PropertiesManagerImpl initialized successfully with the following properties on startup: {}", this);
    }

    public String toString() {
        return "PropertiesManagerImpl [firebaseUrl=" + firebaseUrl + "]";
    }
}
