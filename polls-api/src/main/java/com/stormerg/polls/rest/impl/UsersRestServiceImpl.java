package com.stormerg.polls.rest.impl;

import com.stormerg.polls.firebase.FirebaseService;
import com.stormerg.polls.properties.PropertiesManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class UsersRestServiceImpl extends AbstractFirebaseRestService {

    @Autowired
    public UsersRestServiceImpl(final PropertiesManager propertiesManager,
                                final FirebaseService firebaseService) {
        super(propertiesManager, firebaseService);
    }

    // TODO - POST for signup account creation (return same as authentication)

    // TODO - GET for email link to reset password (URL opens update tab for user to edit account)

    // TODO - PUT for updating existing account (requires authentication OR email link)
}
