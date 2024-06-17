import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PollsService {
  polls = [
    { id: 1, number: 1, question: 'Question 1?', leftAnswer: 'Longer answer number 1', rightAnswer: 'Shorter answer',  yesParticipants: 10, noParticipants:  40, answer: "leftAnswer"},
    { id: 2, number: 2, question: 'Question 2?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 1, noParticipants: 2, },
    { id: 3, number: 3, question: 'Question 3?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 2587, noParticipants: 45 },
    { id: 4, number: 4, question: 'Question 4?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 73, noParticipants: 32570 },
    { id: 5, number: 5, question: 'Question 5?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 775270, noParticipants: 5727 },
    { id: 6, number: 6, question: 'Question 6?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 538, noParticipants: 14742 },
    { id: 7, number: 7, question: 'Question 7?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 537, noParticipants: 878 },
    { id: 8, number: 8, question: 'Question 8?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 45385, noParticipants: 82877 },
    { id: 9, number: 9, question: 'Question 9?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 45, noParticipants: 54 },
    { id: 10, number: 1, question: 'Question 9?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 45, noParticipants: 54 },
    { id: 11, number: 2, question: 'Question 9?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 45, noParticipants: 54 },
    { id: 12, number: 3, question: 'Question 9?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 45, noParticipants: 54 },
    { id: 13, number: 4, question: 'Question 9?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 45, noParticipants: 54 },
    { id: 14, number: 5, question: 'Question 9?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 45, noParticipants: 54 },
    { id: 15, number: 6, question: 'Question 9?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 45, noParticipants: 54 },
    { id: 16, number: 7, question: 'Question 9?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 45, noParticipants: 54 },
    { id: 17, number: 8, question: 'Question 9?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 45, noParticipants: 54 },
    { id: 18, number: 9, question: 'Question 9?', leftAnswer: 'Vote Yes', rightAnswer: 'Vote No', yesParticipants: 45, noParticipants: 54 },
  ];

  constructor() { }

  getCalculatedPolls() {
    let today = new Date();
    return this.polls.map(poll => {
      const totalParticipants = poll.yesParticipants + poll.noParticipants;
      const yesPercentage = ((poll.yesParticipants / totalParticipants) * 100).toFixed(2);
      const noPercentage = ((poll.noParticipants / totalParticipants) * 100).toFixed(2);
      const timeColorControl = today.getTime().valueOf() + poll.id;

      return {
        ...poll,
        totalParticipants,
        yesPercentage,
        noPercentage,
        timeColorControl
      };
    });
  }
}
