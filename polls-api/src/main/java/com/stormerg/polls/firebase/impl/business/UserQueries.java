package com.stormerg.polls.firebase.impl.business;

import com.stormerg.polls.firebase.FirebaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserQueries {

    private final FirebaseService firebaseService;

    @Autowired
    public UserQueries(FirebaseService firebaseService) {
        this.firebaseService = firebaseService;
    }
}
