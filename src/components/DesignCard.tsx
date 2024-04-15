export default function DesignCard({img, title, icon} : {img : string, title : string, icon : string}) {
    return (
        <div className="box-border w-full p-2 border-2 border-white border-opacity-25 rounded-3xl bg-card-black">
            <img src={img} alt={`${title} banner`} className="object-cover w-full h-full rounded-xl" />
            <div className="relative inline-flex items-center justify-center w-full h-full gap-2 transition-all ease-out opacity-0 hover:opacity-100 rounded-xl -top-full hover:bg-card-black/75 hover:backdrop-blur-sm">
                <img src={icon} alt={`${icon} icon`} className="h-8" />
                <h3 className="text-2xl">{title}</h3>
            </div>
        </div>
    )
}