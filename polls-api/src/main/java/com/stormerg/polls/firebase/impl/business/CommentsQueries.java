package com.stormerg.polls.firebase.impl.business;

import com.stormerg.polls.firebase.FirebaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentsQueries {

    private final FirebaseService firebaseService;

    @Autowired
    public CommentsQueries(FirebaseService firebaseService) {
        this.firebaseService = firebaseService;
    }
}
