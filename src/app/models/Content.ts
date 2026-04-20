import mongoose, {Schema,model,models} from 'mongoose';
const ContentSchema = new Schema({
    title:String,
    description:String,
    type:String,
});
const Content = models.Content || model('Content', ContentSchema);
export default Content;

