import PR from "../Components/Resume.pdf";
import AllPagesPDFViewer from "./all-pages";



function Resume(){
    return(
        
        <div className="Resume_backgroud">
            <h1>RESUME</h1>
            <hr/>
            <div>
                <AllPagesPDFViewer pdf={PR}/>
            </div>
            <btn className="down_btn" onHover="down_btn_hover"><a href={PR} target="_blank">Download Resume</a></btn>
        </div>
    );
}
export default Resume;