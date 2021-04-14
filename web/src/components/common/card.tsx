import React from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';

interface IProps {
  keyName: string,
  columns: Array<any>,
  data: {
    data: Array<any>,
    page: number,
    size: number,
    totalCount: number
  }
  className: string,
  onPageChange: (page: number, size: number) => void
};

export default (props: IProps) => {
  return (
    <div className="table">
      {props.data.data && props.data.data.length > 0 && (
        <div style={{borderBottom: '1px solid #ccc', borderTop: '1px solid #ccc', marginBottom: '10px', padding: '10px 0px'}}>
              <div className="d-ib">
                {'Showing ' +
                  (props.data.page * props.data.size + 1) +
                  ' to ' +
                  (props.data.page * props.data.size + props.data.size >
                  props.data.totalCount
                    ? props.data.totalCount
                    : props.data.page * props.data.size + props.data.size) +
                  ' of ' +
                  props.data.totalCount +
                  ' entries'}
              </div>
              {props.data.totalCount > props.data.size && (
                <div className="d-ib fr">
                  {props.data.page > 0 && (
                    <GrPrevious
                      size="1.3em"
                      title="Previous"
                      className="pointer"
                      onClick={() => {
                        props.onPageChange(
                          props.data.page - 1,
                          props.data.size
                        );
                      }}
                    />
                  )}
                  {props.data.totalCount / props.data.size > 0 &&
                    [
                      ...Array(
                        Math.ceil(props.data.totalCount / props.data.size)
                      )
                    ].map((d, i) => {
                      return (
                        <span
                          key={'dt-page-' + i}
                          className={
                            'pL-5 pR-5 mL-3 mR-3 pointer' +
                            (i === props.data.page
                              ? ' bgc-blue c-white'
                              : '')
                          }
                          onClick={() => {
                            props.onPageChange(i, props.data.size);
                          }}
                        >
                          {i + 1}
                        </span>
                      );
                    })}
                  {props.data.page <
                    Math.ceil(props.data.totalCount / props.data.size) - 1 && (
                    <GrNext
                      size="1.3em"
                      title="Next"
                      className="pointer"
                      onClick={() => {
                        props.onPageChange(
                          props.data.page + 1,
                          props.data.size
                        );
                      }}
                    />
                  )}
                </div>
              )}
        </div>
      )}
      <div>
        {props.data.data && props.data.data.length > 0 ? (
          props.data.data.map((row, i) => {
            return (
              <ul key={i + props.keyName} className='card'>
                {props.columns &&
                  props.columns.map(column => {
                    return (
                      <li
                        key={i + 'td' + (column.key ? column.key : column.name)}
                        className=''
                      >
                        {column.custom ? column.custom(row)
                         :
                        <div>
                        <label className='bold mr10'>{column.name + ':'}</label>
                         <span>{row[column.key]}</span>
                         </div>
                         }
                      </li>
                    );
                  })}
              </ul>
            );
          })
        ) : (
          <div>
            <div>No data found!!!</div>
          </div>
        )}
      </div>
    </div>
  );
};