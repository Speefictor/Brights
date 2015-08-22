if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    visitor: function(){
        return Session.get('visitor');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
    
  Template.input.events({
    'keyup input': function(event,template){
        Session.set('visitor',event.target.value);
        if(event.keyCode==13){
            alert("Welcome "+event.target.value+"!");
        }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
