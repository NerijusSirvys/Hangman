export const Message = (props: any | string) => {
  const { message } = props;
  return (
    <div className="message">
      <h2>{message}</h2>
    </div>
  );
};
