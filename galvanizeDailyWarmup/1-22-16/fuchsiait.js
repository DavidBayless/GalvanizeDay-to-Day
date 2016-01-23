var app = angular.module('FuchsiaIt', []);
app.controller('FuchsiaItController', function($scope) {
  var vm = this;

  vm.extendedNav = false;
  vm.posts = [{title: 'Mongooses? Mongeese? Who Knows!?',
               author: 'Bob Bobson',
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, officia deserunt mollit anim id est laborum.",
               date: new Date(),
                hour: hours(),
                minutes: minutes(),
                meridian: meridian(),
                comments: [{author: 'Fred Fredson',
                           comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                         },
                         {author: 'Fred Fredson',
                          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                  },
                         {author: 'Fred Fredson',
                         comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                 }],
                likes: 0,
                image: 'http://loremflickr.com/320/240',
                visibleComments: false,
                visibleForm: false,
                addComment: addComment
              },
              {title: 'I like my name, okay!?!?!?!?',
                           author: 'Fred Fredson',
                           content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, officia deserunt mollit anim id est laborum.",
                           date: new Date(),
                            hour: hours(),
                            minutes: minutes(),
                            meridian: meridian(),
                            comments: [{author: 'Fred Fredson',
                                       comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                     }],
                            likes: 2,
                            image: 'http://loremflickr.com/321/240',
                            visibleComments: false,
                            visibleForm: false,
                            addComment: addComment
                          }];
  vm.addPost = function(postObj) {
    postObj.date = new Date();
    postObj.minutes = minutes();
    postObj.hour = hours();
    postObj.meridian = meridian();
    postObj.comments = [];
    postObj.likes = 0;
    postObj.visibleComments = false;
    postObj.visibleForm = false;
    postObj.addComment = addComment;
    vm.posts.push(postObj);
    postObj = {};
  };

  function addComment(postObj, commObj) {
    postObj.comments.push(commObj);
    commObj = {};
  }

  function minutes() {
    var minVal = new Date().getMinutes();
    if (minVal < 10) {
      minVal = '0' + minVal.toString();
    } else {
      minVal = minVal.toString();
    }
    return minVal;
  }

  function hours() {
    var hourVal = new Date().getHours();
    if (hourVal > 12) {
      hourVal -= 12;
    }
    return hourVal;
  }

  function meridian() {
    var value;
    var hour = new Date().getHours();
    hour >= 12 ? value = "PM" : value = "AM";
    return value;
  }
});
