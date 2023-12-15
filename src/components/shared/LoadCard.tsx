import { Skeleton } from "@/components/ui/skeleton"







const LoadCard = () => {

      return (
        <div className="post-card">
            <div className="flex-between">
                <div className="flex items-center gap-3">
                    <div>
                        <Skeleton style={{background:"rgba(255, 255, 255, 0.2)"}} className="w-[50px] bg-transparent h-[50px] rounded-full" />

                    </div>
                    <div className="flex flex-col gap-y-3">
                        <Skeleton style={{background:"rgba(255, 255, 255, 0.2)"}} className="w-[200px] h-[20px]" />
                        <div className="flex-center gap-2 text-light-3">
                            <Skeleton style={{background:"rgba(255, 255, 255, 0.2)"}} className="w-[200px] h-[20px]" />
                    
                        </div>
                    </div>
                </div>
            </div>
             <div>
               <div className="small-medium lg:base-medium py-5">
                   <Skeleton style={{background:"rgba(255, 255, 255, 0.2)"}} className="w-[100%] h-[20px]"/>

                  <ul className="flex gap-1 mt-2">
                      <Skeleton style={{background:"rgba(255, 255, 255, 0.2)"}} className="w-[200px] h-[20px]" />
                  </ul>
               </div>
                  <Skeleton style={{background:"rgba(255, 255, 255, 0.2)"}} className="post-card_img" />

             
             </div>

             {/* <PostStats post={post} userId={user.id}/> */}


        </div>
    )
}

export default LoadCard