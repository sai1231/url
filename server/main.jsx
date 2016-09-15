import { Meteor } from 'meteor/meteor';
import {Links} from '../imports/collections/links';
import {WebApp} from 'meteor/webapp';
import ConnectRoute from 'connect-route';


Meteor.startup(() => {
  // code to run on server at startup
    Meteor.publish('links', function(){
        return Links.find({});
    })
});


// if tokens in url are relevant
//Executed whenever a user visits with route like localhost:3000/abcd
function onRoute(req, res, next){
    //Take token from url and try to find match in Links collection
    const link = Links.findOne({token: req.params.token });

    if (link){
    //If found, redirect to long URL

        res.writeHead(307, {'Location': link.url});
        res.end();
    }else{
    //else send to normal react app
        next();
    }


}

//localhost:3000/ NO MATCH
//localhost:3000/asdf/asdf/asdf/ NO MATCH
//localhost:3000/abcd WILL MATCH

const middleware = ConnectRoute(function(router){
    router.get('/:token', (req) => onRoute);
});

WebApp.connectHandlers.use(middleware)
