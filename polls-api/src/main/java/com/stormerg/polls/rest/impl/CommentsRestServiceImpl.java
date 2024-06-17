package com.stormerg.polls.rest.impl;

import com.stormerg.polls.firebase.FirebaseService;
import com.stormerg.polls.properties.PropertiesManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class CommentsRestServiceImpl extends AbstractFirebaseRestService {

    @Autowired
    public CommentsRestServiceImpl(final PropertiesManager propertiesManager,
                                   final FirebaseService firebaseService) {
        super(propertiesManager, firebaseService);
    }

    // TODO - POST for adding comments (requires authentication & could ban email/IP if flagged)
}
