export const SourceCodeReference = ({ filePath, name }: { filePath: string; name: string }) => (
  <div className='fixed-src-box'>
    <h4>
      source code:&nbsp;
      <a href={`https://github.com/olarsson/react-scrollsy-examples/blob/master/src/${filePath}`} target='_blank' rel='noopener noreferrer'>
        &lt;{name} /&gt;
      </a>
    </h4>
  </div>
);
