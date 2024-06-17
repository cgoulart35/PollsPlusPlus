package com.stormerg.polls.firebase.impl.business;

import com.stormerg.polls.firebase.FirebaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BlacklistQueries {

    private final FirebaseService firebaseService;

    @Autowired
    public BlacklistQueries(FirebaseService firebaseService) {
        this.firebaseService = firebaseService;
    }
}
