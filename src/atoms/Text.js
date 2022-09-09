const Text = props => {
  return (
    <div style={{
        color: props.color,
        fontFamily: 'pedestria-mvb, sans-serif',
        fontWeight: props.fontWeight,
        fontStyle: 'normal',
        fontSize: props.fontSize
    }}>
        <p>{props.content}</p>
    </div>
  );
}

export default Text;