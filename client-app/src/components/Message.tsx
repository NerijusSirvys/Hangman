interface Props {
  message: string;
}

export const Message = ({ message }: Props) => {
  return (
    <div className="message">
      <h2>{message}</h2>
    </div>
  );
};
