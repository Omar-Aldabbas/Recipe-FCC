import  Chef from "../assets/images/chef-claude-icon.png"

export const Logo = () => {

    return (
        <div className="container mx-auto shadow-md p-3 flex flex-row flex-nowrap justify-center items-center gap-4">
            <img src={Chef} alt="Cheff logo" className="w-14" />
            <h1 className="text-3xl font-semibold ">Chef Claude</h1>
        </div>
    )
}