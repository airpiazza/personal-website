const Text = props => {
  return (
    <div style={{
        color: props.color,
        fontFamily: `${props.fontFamily}, sans-serif`,
        fontWeight: props.fontWeight,
        fontStyle: 'normal',
        fontSize: props.fontSize,
        marginRight: props.marginRight
    }}>
        <p>{props.content}</p>
    </div>
  );
}

export default Text;