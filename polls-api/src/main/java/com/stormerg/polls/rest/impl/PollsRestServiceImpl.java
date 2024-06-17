package com.stormerg.polls.rest.impl;

import com.stormerg.polls.firebase.FirebaseService;
import com.stormerg.polls.properties.PropertiesManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class PollsRestServiceImpl extends AbstractFirebaseRestService {

    @Autowired
    public PollsRestServiceImpl(final PropertiesManager propertiesManager,
                                final FirebaseService firebaseService) {
        super(propertiesManager, firebaseService);
    }

    // TODO - POST for setting current poll data (private endpoint that uses firebase auth)

    // TODO - GET for getting current poll data (authentication optional; includes voting info if authenticated)

    // TODO - PUT for voting on/updating existing poll (requires authentication)
}
