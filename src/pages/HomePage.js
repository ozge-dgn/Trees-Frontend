import '../styles/HomePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-green/theme.css'
import LeftMenu from '../components/LeftMenu';
import TreeCount from '../components/TreeCount';

export default function HomePage(){

    return(
        <div className="container-fluid">
            <div className="row min-vh-100">
                <div className="col flex-row">
                    <LeftMenu className="sticky-top "/>
                </div>
                <div className="col d-flex flex-column">
                    <MiddleColumn/>
                </div>
                <div className="col">
                   <TreeCount/>
                </div>
            </div>
        </div>
    )

}

function MiddleColumn(){
    return(
        <>
            <MakePost/>
            <Posts/>
        </>
    )
}
function MakePost(){
    return(
        <>
            create your post
        </>
    )
}
function Posts(){
    return(
        <>
            <p>


                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero imperdiet, placerat mauris at, efficitur ante. In gravida in lorem commodo rhoncus. Duis porttitor lorem vel posuere efficitur. Proin odio sem, varius at posuere ut, luctus quis ipsum. Sed ullamcorper sagittis nibh. Mauris malesuada, dui ac convallis laoreet, neque lorem gravida risus, vitae dapibus tellus eros sit amet tellus. Aliquam convallis quam quis nibh tristique, ut luctus magna mollis. Aenean nec dapibus arcu. Duis tempus augue non arcu porta, nec efficitur libero blandit.

                Donec a quam et odio congue tristique eu non erat. Donec nec dui eget justo lacinia fringilla vitae vel nisi. Suspendisse tincidunt dui id lacus lacinia, nec commodo augue facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit est, iaculis quis pharetra nec, pulvinar a nulla. Fusce aliquet nisl non tristique varius. Sed eu consectetur orci, et cursus lorem. Sed efficitur elit vitae cursus venenatis.

                Curabitur erat velit, dictum id blandit id, suscipit accumsan tellus. Vestibulum maximus ut eros vitae sodales. Duis pharetra nunc id condimentum blandit. Suspendisse aliquam turpis vel diam eleifend, ut facilisis augue consectetur. Phasellus at lectus turpis. Ut euismod sed orci in pharetra. Nullam semper sit amet neque et dignissim. Sed sed magna facilisis lacus semper pharetra ac eget metus. Vivamus at libero in enim ornare fermentum eget et sem. Vivamus porta ex turpis, non eleifend erat pulvinar a. Sed imperdiet maximus dui ac mollis.

                Nunc viverra arcu at venenatis tincidunt. Integer mauris tellus, efficitur quis orci eget, porta porttitor neque. Curabitur porttitor quis dui eget egestas. Ut mattis magna ac porttitor commodo. Etiam feugiat ultrices mollis. Curabitur condimentum vestibulum condimentum. Maecenas gravida semper orci in dictum.

                Etiam tempor pretium erat vel mattis. Nunc erat velit, eleifend eget dui condimentum, semper consectetur nibh. Nam ac nulla tristique, faucibus arcu sit amet, viverra lacus. Vivamus sed lectus luctus, aliquet quam nec, ornare ex. Donec placerat risus non leo dignissim mattis. Mauris quis nisl et erat volutpat fringilla sed quis diam. Nam at felis purus. Nullam sed felis tincidunt nunc hendrerit pellentesque. Praesent ac diam tincidunt, ultrices purus non, tempus erat. In scelerisque a diam ac lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec lacinia nibh non risus sollicitudin, ac iaculis lectus porta. Aenean vel justo velit. Aliquam et suscipit ligula.

                Curabitur commodo nec massa non convallis. Duis iaculis libero sed neque molestie gravida. Praesent laoreet mauris eget neque imperdiet, eu gravida sem semper. Nullam pharetra sapien sed lectus cursus, ac faucibus odio aliquet. Donec ut tincidunt ante, vitae fringilla felis. Donec non nisi viverra, bibendum est eget, ornare sem. Sed suscipit urna at vestibulum tincidunt. Sed eu nisl ipsum. Morbi vitae orci fringilla, eleifend ipsum sit amet, ultricies ligula. Vivamus eu scelerisque nisi. Vivamus dapibus rutrum sem eu ornare. Etiam a molestie lectus, sed rutrum risus. Phasellus ornare velit ac quam viverra, non gravida justo interdum. Sed sed pretium dolor. Phasellus suscipit libero sit amet enim accumsan auctor. Quisque ullamcorper congue dui at hendrerit.

                Nam vestibulum consequat orci, blandit tempus lacus volutpat in. Mauris posuere iaculis massa, nec aliquet risus ultricies in. Sed vitae sem ac sapien accumsan vehicula ac aliquam sem. Praesent ultricies ut dui sed efficitur. In non elementum arcu, non finibus ex. Morbi vitae eros metus. Duis pellentesque finibus ligula ut vehicula. Nulla sem nisl, dignissim nec cursus et, malesuada vitae erat.

                Vestibulum gravida nisl nunc, eget vehicula lorem egestas sit amet. Cras ut ligula ex. Mauris eu dignissim lacus. Etiam magna metus, porta vel nulla quis, tristique viverra leo. Quisque at ullamcorper dui. Nunc magna tortor, imperdiet vel volutpat vel, placerat vel libero. Aenean vulputate dolor quis pulvinar hendrerit. Praesent blandit libero quis odio semper, quis vestibulum sem suscipit. Nullam at accumsan ex, ac malesuada libero. Vestibulum non tristique augue. In fringilla ac mauris ornare egestas. Sed tincidunt eros non nisi dapibus, eget tincidunt est luctus.

                Aliquam tristique ligula ac sem euismod hendrerit. Sed semper viverra mauris volutpat ornare. Etiam dapibus urna justo, id scelerisque velit ornare id. Nullam nunc justo, finibus vestibulum tincidunt vitae, venenatis eu leo. Curabitur eu est non diam ornare pulvinar. Quisque vitae nisl eget purus vulputate efficitur quis nec dui. In condimentum tristique augue sed rhoncus. Proin blandit pellentesque est ut varius. Cras luctus auctor semper. Integer ac dui aliquet, suscipit sem nec, cursus lacus. Vivamus tempus velit orci, sit amet finibus nunc laoreet nec. Praesent elit risus, fermentum nec turpis sed, efficitur auctor risus.

                Nam fringilla massa ut nisl varius volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ut venenatis eros. Morbi lacus nisl, consectetur in enim ac, laoreet vehicula est. Maecenas placerat, nisl vel tristique vulputate, augue augue consequat tortor, molestie pellentesque erat sapien a nisi. Curabitur id tortor ut justo dictum porta. Nunc et laoreet felis. Aenean sit amet vehicula ipsum. Sed non aliquam erat. Duis non tortor nec urna lacinia blandit ac ut sem. Phasellus a risus sit amet tellus lobortis vestibulum. Maecenas massa odio, blandit quis dapibus sit amet, malesuada in quam. Proin vehicula dui ut egestas ornare. Etiam leo diam, aliquet nec enim quis, porttitor sagittis dui. Sed hendrerit pretium ipsum lacinia auctor. Aliquam erat volutpat.
            </p>
        </>
    )
}