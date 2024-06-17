package com.stormerg.polls.rest.impl;

import com.stormerg.polls.firebase.FirebaseService;
import com.stormerg.polls.properties.PropertiesManager;

public abstract class AbstractFirebaseRestService extends AbstractRestService {

    protected final FirebaseService firebaseService;

    public AbstractFirebaseRestService(final PropertiesManager propertiesManager,
                                       final FirebaseService firebaseService) {
        super(propertiesManager);
        this.firebaseService = firebaseService;
    }
}
