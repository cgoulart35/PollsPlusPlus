package com.stormerg.polls.rest.impl;

import com.stormerg.polls.properties.PropertiesManager;
import com.stormerg.polls.rest.RestService;

public abstract class AbstractRestService implements RestService {

    protected final PropertiesManager propertiesManager;

    public AbstractRestService(final PropertiesManager propertiesManager) {
        this.propertiesManager = propertiesManager;
    }
}
