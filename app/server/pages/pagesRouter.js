import * as express from 'express';
import * as path from 'path';
import routes from './routes';
import * as R from 'ramda';

const router = express.Router();
router.use(express.json());

router.get('/*', (req, res) => {

    const match = R.contains(req.url, routes);
    console.log(req.url);
    //routes.reduce((acc, route) => (route == req.url ? true : false) || acc , null);
    if (!match) {
        res.status(404).send('page not found');
    }
    else {
        res.sendFile(path.join(__dirname,'../index.html'), function(err) {
        if(err) {
            res.status(500).send(err);
            }
        })
    }
})

module.exports = router