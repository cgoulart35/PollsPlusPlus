package com.stormerg.polls.rest.impl;

import com.stormerg.polls.properties.PropertiesManager;
import com.stormerg.polls.rest.RestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class PropertiesRestServiceImpl extends AbstractRestService implements RestService {

    @Autowired
    public PropertiesRestServiceImpl(final PropertiesManager propertiesManager) {
        super(propertiesManager);
    }
}
