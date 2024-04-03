
import qZone1 from '../../../../dragon-news-resources/assets/qZone1.png'
import qZone2 from '../../../../dragon-news-resources/assets/qZone2.png'
import qZone3 from '../../../../dragon-news-resources/assets/qZone3.png'

const Right = () => {
    return (
        <div>
            <div className="p-4  mb-6">
                <h2 className="text-2xl mb-4">Login with</h2>
                <button className="btn btn-outline w-full">
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    Github
                </button>
            </div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl">Find us</h2>
               <a href="p-4 flex text-lg items-center border rounded-t-lg border-x">Facebook</a>
               <br />
               <a href="p-4 flex text-lg items-center border rounded-t-lg">Twitter</a>
               <br />
               <a href="p-4 flex text-lg items-center border rounded-b-lg">Instragram</a>
               <br />
            </div>
            <div className="p-4  mb-6">
                <h2 className="text-2xl mb-4">Q zone</h2>
               <img src={qZone1} alt="" />
               <img src={qZone2} alt="" />
               <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default Right;