import uselayout from "@/hooks/useLayout"

const HeaderSpacing = ()=> {
    const {headerHeight} = uselayout()

    return <div style={{height:headerHeight+'rem',width:"100%"}}>
        </div>
}

export default HeaderSpacing