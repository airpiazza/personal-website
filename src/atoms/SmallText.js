const SmallText = props => {
  return (
    <div style={{
        color: '#5D137C',
        fontFamily: 'pedestria-mvb, sans-serif',
        fontWeight: 700,
        fontStyle: 'normal',
        fontSize: '3vw'
    }}>
        <p>{props.content}</p>
    </div>
  );
}

export default SmallText;