const Text = props => {
  return (
    <div style={{
        color: props.color,
        fontFamily: `${props.fontFamily}, sans-serif`,
        fontWeight: props.fontWeight,
        fontStyle: 'normal',
        fontSize: props.fontSize,
        marginRight: props.marginRight,
        WebkitTextStroke: `${props.WebkitTextStroke}`
    }}>
        <p>{props.content}</p>
    </div>
  );
}

export default Text;