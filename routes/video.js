import express from 'express'
import { addVideo, bySearch, byTag, deleteVideo, randomVideos, sub, trend, updateVideo, videoById, videoViews } from '../controllers/videos.js';
import verifyToken from '../verifyToken.js';

const router = express.Router();

//addvideo
router.post('/addVideo', verifyToken, addVideo)

//updateVideo
router.put('/update/:id', verifyToken, updateVideo)

//deleteVideo
router.delete('/delete/:id', verifyToken, deleteVideo)

//getVideoById
router.get('/fetchVideo/:id', videoById)

//get subscribedVideo
router.get('/sub', verifyToken, sub)

//get trendVideos
router.get('/trend', trend)

//get randomVideos
router.get('/random', randomVideos)

//get trendVideo
router.put('/views/:id', videoViews)

//get byTag
router.get('/tags', byTag)

//get bySearch
router.get('/search', bySearch)

export default router