import React, {useState} from 'react';
import { AiFillIdcard } from 'react-icons/ai';
import { BsGrid3X3 } from 'react-icons/bs';
import { View, Text, TextInput } from '../common/elements';
import { IHistoricalDataList } from '../../models/store/historical-data-list';
import Spinner from '../common/spinner';
import DataTable from '../common/data-table';
import Card from '../common/card';
// import Button from '../common/button';

interface IProps {
  historicalDataList: IHistoricalDataList,
  searchQuote: (text: string, callback: (result: Array<string>) => void) => void,
  search: (quote: string, page: number, size: number, callback: (result: boolean) => void) => void
};

export default (props: IProps) => {
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasDropDown, setHasDropDown] = useState(false);
  const [dropDownData, setDropDownData] = useState([] as Array<string>);
  const [viewType, setViewType] = useState('GRID');

  const getColumns = () => {
    return [
      {
        name: 'Date',
        custom: (row: any) => {
          return (new Date(row.date).toLocaleDateString());
        }
      },
      {
        name: 'Open',
        key: 'open'
      },
      {
        name: 'High',
        key: 'high'
      },
      {
        name: 'Low',
        key: 'low'
      },
      {
        name: 'Close',
        key: 'close'
      },
      {
        name: 'Adj Close',
        key: 'adjClose'
      },
      {
        name: 'Volume',
        key: 'volume'
      }
    ];
  };

    return(
    <View className='d100'>
      <View className='dflex' style={{marginBottom: '25px'}}>
        <View className='d50 mr10 pr'>
          <TextInput type='text' className='d100' placeholder='Search Historical Data' value={searchText + ''}
          onFocus={() => setHasDropDown(true)}
          onChange={(e: any) => {
            setSearchText(e.target.value);
            props.searchQuote(e.target.value, (result: Array<string>) => {
              setDropDownData(result);
            });
            }} style={{padding: '3px 5px'}} />
          {hasDropDown &&
          <View className='ddl pa d100' style={{zIndex: 1}}>
            <Text title='Close' className='pa bold tar pointer' style={{color: '#FF0000', right: 0, top: '-7px'}} onClick={() => setHasDropDown(false)}>X</Text>
            {dropDownData.length > 0 ?
            dropDownData.map((d: string, i) => {
            return(
              <View key={'quote' + i} className='ddli pointer' style={{}} onClick={() => {
                setHasDropDown(false);
                setSearchText(d);
                setIsLoading(true);
                props.search(d, 0, 20, (result: boolean) => {
                  setIsLoading(false);
                });
              }}>{d}</View>
            )
            })
            :
            <Text style={{padding: '5px'}}>No data matches!!!</Text>
          }
          </View>
          }
        </View>
        {/* <Button title='Search' onPress={() => {
          setIsLoading(true);
          props.search(searchText, (result: boolean) => {
            setIsLoading(false);
          });
        }} /> */}
        <BsGrid3X3
        size="1.5em"
        title="Grid"
        className="pointer mr10"
        style={viewType === 'GRID' ? {marginTop: '4px', color: '#0078d7'} : {marginTop: '4px'}}
        onClick={() => {
          setViewType('GRID');
        }}/>
        <AiFillIdcard
        size="2em"
        title="Card"
        className="pointer"
        style={viewType === 'CARD' ? {color: '#0078d7'} : {}}
        onClick={() => {
          setViewType('CARD');
        }}/>
      </View>
      {(props.historicalDataList && props.historicalDataList.isUpToDate && props.historicalDataList.data) &&
      <View>
        {viewType === 'GRID' ?
      <DataTable
      keyName="historical-data"
      className=''
      columns={getColumns()}
      data={props.historicalDataList.data}
      onPageChange={(page: number, size: number) => {
        setIsLoading(true);
        props.search(searchText, page, size, (result: boolean) => {
          setIsLoading(false);
        });
      }}
    />
      :
      <Card
      keyName="historical-data"
      className=''
      columns={getColumns()}
      data={props.historicalDataList.data}
      onPageChange={(page: number, size: number) => {
        setIsLoading(true);
        props.search(searchText, page, size, (result: boolean) => {
          setIsLoading(false);
        });
      }} />
        }
      </View>
      }
      <Spinner visible={isLoading} text={"Loading..."} />
    </View>
    )
};