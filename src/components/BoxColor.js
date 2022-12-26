import '../css/boxcolor.css'

export default function BoxColor({ r, g, b }) {
    
    const style = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: '100%',
        height: '100px',
        textAlign: 'center',
      };

    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

    
    return(
        <div className="boxcolor" style={style}>
            <p>{rgb}</p>
            <p>{hex}</p>
        </div>
    )
}