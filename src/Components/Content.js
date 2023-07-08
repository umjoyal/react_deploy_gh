import './Content.css'
import ContentLine from './ContentLine'
const Content = ({ content }) => {
    let entries = [];
    if(content){
        Object.entries(content[0]).map((entry)=>{
            if(entry[0] !== 'userId' && entry[0] !== 'postId') entries.push(entry[0]);
        });
    }
    return (
        content && content.length ?
            <table className='content'>
                <tbody>
                    {content.map((item) => <ContentLine key={item.id} item={item} entries={entries} />)}
                </tbody>
            </table> :
            <></>
    );
}

export default Content