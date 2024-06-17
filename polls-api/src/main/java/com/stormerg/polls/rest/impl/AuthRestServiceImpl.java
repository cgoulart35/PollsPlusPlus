package com.stormerg.polls.rest.impl;

import com.stormerg.polls.firebase.FirebaseService;
import com.stormerg.polls.properties.PropertiesManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class AuthRestServiceImpl extends AbstractFirebaseRestService {

    @Autowired
    public AuthRestServiceImpl(final PropertiesManager propertiesManager,
                               final FirebaseService firebaseService) {
        super(propertiesManager, firebaseService);
    }

    // TODO - POST for authenticating a user via email/password (make sure user email/IP is not banned)
}
