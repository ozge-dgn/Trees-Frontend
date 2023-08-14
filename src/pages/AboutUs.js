import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-green/theme.css'
import LeftMenu from "../components/LeftMenu";
import TreeCount from "../components/TreeCount";

export default function AboutUs(){
    return(
        <div className="container-fluid">
            <div className="row min-vh-100">
                <div className="col-3 flex-row">
                    <LeftMenu className="sticky-top "/>
                </div>
                <div className="col d-flex flex-column">
                    <About/>
                </div>
                <div className="col-md-3">
                    <TreeCount/>
                </div>
            </div>
        </div>
    )
}

function About(){
    return(
        <>
            <h2>About Us</h2>
            <p>


                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt elit eu pellentesque semper. Aliquam dictum ornare ipsum. Morbi pharetra magna est, at mollis metus facilisis quis. Cras eu volutpat est. Quisque id urna risus. In ultrices volutpat dapibus. Aenean scelerisque id tellus convallis porttitor. Ut ultrices, justo et tincidunt vulputate, quam erat tristique risus, vitae sagittis leo orci eu neque. Nullam auctor vitae felis nec aliquet. Proin nisl dui, fringilla et convallis non, faucibus ut neque. Cras vitae lectus dapibus, suscipit orci sit amet, tincidunt tortor. Etiam laoreet eleifend ante mollis egestas. Aliquam libero erat, elementum a malesuada vel, aliquam at nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et quam et leo varius imperdiet sit amet et sapien.

                Duis facilisis, ex et placerat aliquet, elit leo vestibulum orci, id pulvinar augue eros vel velit. Proin a augue quis tellus lobortis suscipit eu eget justo. Nunc mollis quam vitae neque fringilla, eu facilisis elit consectetur. Aliquam vitae orci fringilla, rhoncus magna in, iaculis augue. Donec bibendum lacus ut odio pretium cursus. Nam risus neque, tincidunt vitae ipsum vel, rutrum pharetra arcu. Vivamus interdum erat nisl, vitae suscipit mauris sagittis vel.

                Integer ut elit lacus. Sed varius consequat luctus. Suspendisse quis ornare purus. Aliquam et mi faucibus, porta erat eu, molestie urna. Integer scelerisque nisi vitae magna ornare egestas. Vestibulum imperdiet egestas lorem ultrices facilisis. Pellentesque lobortis id nisi eget ullamcorper. Cras mollis nulla ut pharetra tincidunt. Ut quis sollicitudin nunc. Fusce eget nisl quam. Sed condimentum felis dignissim finibus feugiat. Donec nibh tellus, finibus sit amet aliquet et, molestie quis nisl. In interdum euismod leo id auctor. Duis sagittis metus in ornare placerat. Maecenas nec purus elementum, suscipit libero nec, ultricies lorem. Curabitur ultrices ultricies metus quis tincidunt.

                Curabitur pulvinar sapien gravida maximus pretium. Cras malesuada, arcu nec imperdiet fermentum, lectus ipsum eleifend ex, eget iaculis eros urna nec massa. Nullam tempor libero consectetur, congue mauris eget, consectetur eros. Vestibulum ultrices, metus eu ornare bibendum, arcu velit tempus nibh, sit amet feugiat augue sapien vitae purus. Quisque a maximus tortor. Proin eleifend arcu sed orci dictum, id accumsan mauris consectetur. Suspendisse potenti. In ut purus vel est congue porttitor in eget justo.

                Nulla facilisi. Nam est augue, aliquam et libero sed, placerat efficitur purus. Suspendisse eu mattis augue. Aenean eu feugiat erat, vel tincidunt felis. Aliquam at tellus libero. Sed rhoncus vehicula aliquam. Suspendisse ac velit sed nunc ultrices fringilla id eu tellus.

                Proin elementum eget tellus eu aliquam. Maecenas rutrum aliquam tellus, non pellentesque eros feugiat at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, massa a efficitur dignissim, tortor nibh ullamcorper mi, a porta eros augue sit amet lorem. Morbi eu ante justo. Quisque at tortor ut velit gravida tincidunt. Mauris a nunc id ipsum dictum gravida. Nam pretium erat eget libero condimentum dignissim at eu ligula. Nullam at est quam. Maecenas lorem lorem, rhoncus quis aliquam a, vehicula nec ipsum. Aliquam blandit diam vel aliquet elementum. Suspendisse tincidunt nisl ut nisl egestas pharetra. Quisque maximus consectetur magna, sit amet aliquam nisl mattis et.

                Cras mauris eros, scelerisque vitae interdum vel, vulputate ut ex. Cras non arcu vitae nisl venenatis vehicula vel non augue. Sed rutrum nisi non ante fringilla dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat maximus malesuada. Etiam euismod ipsum et dui gravida, eget mollis velit dignissim. Sed vitae erat dolor. Pellentesque ullamcorper dapibus ipsum, in dignissim leo tincidunt ut. Nunc odio odio, auctor ac nisl vel, dictum tincidunt felis. Morbi porttitor leo eget mattis pellentesque. In tincidunt metus sed efficitur fringilla. Nunc hendrerit, dui sit amet porttitor tincidunt, dolor nibh lobortis tortor, at lobortis mi nibh in enim. Ut ex lacus, euismod et ornare ut, rutrum a mi. Maecenas nec tincidunt erat.

                Curabitur turpis mauris, feugiat sit amet imperdiet ut, pellentesque sit amet erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque porttitor risus et sodales maximus. Nam porta orci purus, eget dapibus libero vestibulum placerat. Proin felis quam, vehicula eu posuere et, fermentum vitae diam. In consectetur enim vel vulputate fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nibh ex, dignissim ut placerat vel, viverra eu nunc. Nulla vitae mi ut ipsum volutpat tincidunt eget quis turpis. Maecenas tempor vel nisl vel varius. Sed ante massa, ultricies vitae rhoncus pulvinar, sagittis vitae felis. Donec viverra, purus eu facilisis iaculis, nisi justo porttitor ipsum, quis dapibus est ante nec risus. Donec vel erat nunc. Etiam a viverra sapien. Nam volutpat porta orci rutrum porttitor.

                Donec faucibus risus id ex auctor luctus. Vestibulum purus ante, finibus et fringilla ac, ornare sit amet justo. Mauris vitae lorem vitae urna posuere vestibulum id et nibh. Mauris rutrum, justo in vulputate porttitor, lorem nisl tristique orci, nec aliquet sem odio tempor mi. Aenean egestas sem justo, ac bibendum nunc semper non. Nulla lacus lorem, euismod at ante in, congue dapibus sapien. Cras quis fermentum risus, nec pharetra augue. In ac arcu leo. Nam ultrices mauris in nunc condimentum congue.

                Curabitur id magna fringilla, tincidunt sem at, rhoncus mauris. Fusce pulvinar a tellus in tempor. Pellentesque fringilla ut ipsum non dictum. Nunc congue nibh rhoncus sem ullamcorper, eget lacinia nisi laoreet. Pellentesque sapien tortor, tempor nec tempor nec, rutrum quis magna. Proin turpis diam, maximus et erat vitae, vulputate condimentum ipsum. Sed odio risus, vehicula nec risus in, porta hendrerit nibh. Morbi quis tellus aliquam, sodales neque sed, posuere leo. Phasellus sed vehicula mi.

                Maecenas et felis congue, scelerisque enim a, semper ante. Etiam lacus ante, interdum at convallis vel, convallis a lacus. Cras eu ultricies arcu. Vestibulum vel est sed diam molestie commodo. Ut nec est convallis, accumsan justo non, ultricies purus. Praesent volutpat suscipit finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ut erat quis mi dictum efficitur euismod lacinia mi. Quisque hendrerit tortor eu augue tempus, consectetur pulvinar ex egestas. Nulla enim sapien, blandit at felis et, faucibus scelerisque nunc. Praesent faucibus, tortor et euismod mattis, nisl diam accumsan est, non dapibus leo elit quis purus. Phasellus et volutpat libero. Nunc malesuada nec libero efficitur tincidunt. Aenean ullamcorper velit aliquet urna molestie, eget accumsan turpis congue.

                Pellentesque sodales lorem vel purus tempus ultricies. Pellentesque ut faucibus diam. Sed quis turpis non metus placerat tincidunt eu vitae lectus. Ut nisl lectus, porttitor quis cursus quis, condimentum eget risus. Etiam tincidunt erat vel lectus dapibus, et vestibulum lorem luctus. Suspendisse sollicitudin ornare mollis. Quisque molestie imperdiet mi, sed efficitur velit finibus sit amet. In commodo in diam quis varius. Suspendisse potenti.

                Donec lectus leo, condimentum eget sem vel, pellentesque cursus justo. Etiam vulputate vestibulum sollicitudin. Integer cursus ligula lobortis odio pretium, eget ornare risus tristique. Donec placerat lacus ut ex tincidunt condimentum. Phasellus dictum eget massa quis mollis. Ut congue dolor eget condimentum dignissim. Nulla malesuada tortor a diam rutrum porttitor. Vestibulum non placerat turpis, a scelerisque elit. Mauris mollis finibus felis, eu posuere leo congue a. Integer vitae varius mauris. Cras mauris magna, egestas et sollicitudin et, accumsan ut est. Suspendisse potenti. Donec ante risus, placerat commodo interdum eget, imperdiet quis justo. Ut placerat et purus in dignissim.

                Quisque venenatis leo a quam scelerisque, eu convallis metus tincidunt. Curabitur ligula odio, rutrum non posuere id, molestie at massa. Ut consequat, tellus eget blandit venenatis, justo quam dignissim mi, et faucibus mauris turpis eu augue. Cras faucibus volutpat nisi, et consequat dui molestie non. Suspendisse vel est a urna consequat dignissim quis in ipsum. Etiam id risus ut risus dictum mollis. Fusce condimentum eu ante in finibus. Donec feugiat tortor non sem eleifend pulvinar. Aliquam ex eros, tristique eget cursus quis, bibendum quis felis. Sed vitae feugiat eros. Phasellus facilisis, ipsum ut aliquet elementum, felis est euismod turpis, ut semper tortor metus at metus. Curabitur ut justo a est venenatis malesuada a a risus. Morbi iaculis nisl sit amet sem mollis sagittis.

                Duis at placerat neque, sed convallis lorem. Nam vestibulum velit in tempus faucibus. Sed varius, justo sed tincidunt placerat, mi quam lobortis ligula, sed varius ligula lectus quis lorem. Curabitur aliquam felis a lacus sodales, id facilisis nunc sodales. Aliquam iaculis aliquam odio, quis luctus libero. Proin quis elit odio. Maecenas tristique diam leo, eu mattis felis pellentesque quis. Quisque volutpat, sapien eu aliquam iaculis, magna orci iaculis turpis, eu faucibus massa ligula a neque. Morbi eget efficitur justo. Curabitur aliquet eget enim non pulvinar. Etiam faucibus varius tempus. Nulla justo dui, porttitor sed interdum vel, laoreet eget leo. Morbi volutpat, lacus sit amet convallis aliquam, neque velit imperdiet mauris, vel finibus leo libero a elit. Curabitur facilisis id velit in convallis. Proin at odio velit. Nullam vehicula, risus quis vestibulum efficitur, mauris magna suscipit enim, et egestas justo elit ac turpis.

                Integer lectus nulla, mollis quis vulputate nec, pulvinar vel est. Curabitur dictum, ex vel mattis euismod, mauris turpis interdum ligula, nec tincidunt nibh sem vel nisi. Vestibulum rutrum vehicula pretium. Fusce ac consectetur eros. Vestibulum tristique turpis erat, at rutrum nulla luctus at. Vivamus sed ultricies purus. Duis fermentum orci in malesuada iaculis. Donec eu ultrices mi, nec tristique tortor. Vestibulum dignissim quam ut porta ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus tortor augue, non sagittis turpis ultrices eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc a eros massa. Morbi at tortor at ex tempus egestas.

                Quisque in ex cursus, vehicula sapien vitae, posuere mi. Curabitur non arcu mattis, condimentum dolor sit amet, hendrerit erat. Sed in condimentum leo. Nunc imperdiet sapien eu lorem ornare interdum id sit amet ligula. Cras vulputate urna in arcu pellentesque condimentum. Nulla sit amet faucibus quam, et eleifend nisi. Donec dictum vulputate elit, in ultricies leo sagittis in. Mauris sit amet nisl vel augue laoreet egestas. Nullam facilisis orci eget eros vulputate egestas.

                Maecenas mattis enim eget mi consequat elementum. Aliquam erat volutpat. Ut dictum volutpat nisl nec cursus. Aliquam sagittis elit nisl. Nunc nisl justo, convallis quis fermentum a, luctus et enim. Aenean scelerisque turpis dolor, a pretium neque gravida at. Vestibulum ex turpis, venenatis eget dolor vitae, mollis congue tortor. Nam vulputate vehicula tortor, eget mollis diam. Proin a ipsum hendrerit ligula efficitur porta ut sed sapien. Suspendisse potenti.

                Aliquam erat volutpat. Fusce pretium pretium nibh et molestie. Proin sagittis venenatis nunc sed sagittis. Aliquam arcu erat, pretium ut lacus nec, faucibus aliquet nibh. Suspendisse potenti. Integer vel pharetra mauris. Aliquam vestibulum, ligula vitae ultrices tempor, ante dui pharetra purus, at ullamcorper nibh sapien consectetur velit. Suspendisse dignissim laoreet est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

                Nulla malesuada magna quis gravida cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu mauris mattis, blandit felis ac, vestibulum augue. Proin laoreet metus at lorem scelerisque, eu tincidunt sem lacinia. Fusce eu semper mi. Nulla facilisi. Fusce felis elit, sodales semper mauris nec, gravida consequat purus.
            </p>
        </>
    )
}