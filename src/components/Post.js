import '../styles/Post.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-green/theme.css'
export default function Post(){
return(
    <div key={""} className="border text-center mt-3">
        <div className="mt-4">
            <p >{"post.post"}</p>
        </div>
        <button className="p-button p-button-secondary del-button rounded-4 " >Delete post</button>
        <button className="p-button p-button-primary del-button rounded-4 " >Update post</button>
    </div>
)
}