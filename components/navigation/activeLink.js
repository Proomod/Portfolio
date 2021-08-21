import Link from 'next/Link';
import { useRouter } from 'next/router';

const ActiveLink=({
    children,...props
})=>{
    const child=React.Children.only(children);
    let className=child.props.className||'';
    const router=useRouter();
    if(router.pathname===props.href && props.activeClassName){
        className+='active';
    }

    delete props.activeClassName;
    return (
        <Link {...props}>
            {React.cloneElement(child,{className})}
        </Link>
    );



};



export default ActiveLink;
 
