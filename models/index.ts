import Image, { associate as associateImage } from './image';
import User, { associate as associateUser } from './user';
import Video, { associate as associateVideo } from './video';
import Review, { associate as associateReview } from './review';
import Lecture, { associate as associateLecture } from './lecture';

export * from './sequelize';
const db = {
  Review,
  Video,
  User,
  Image,
  Lecture,
};

export type dbType = typeof db;

associateReview(db);
associateVideo(db);
associateUser(db);
associateImage(db);
associateLecture(db);

