if(Posts.find().count()===0){
    Posts.insert({
        title:'Introducing Telscope',
        url:'http://sachagrief.com/introducing-telscope'
    });

    Posts.insert({
        title:'Meteor',
        url:'http://meteor.com'
    });

    Posts.insert({
        title:'The Meteor Book',
        url:'http://themeteorbook.com'
    });
}