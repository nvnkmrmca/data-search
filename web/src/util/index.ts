//import { config as apiConfig } from '../store/api/config';

export function parseJSON(response: any) {
     return response.json()
};

export function isNN(_input: any) { 
  return (isNNObject(_input) && _input.length > 0) 
};

export function isNNObject(_input: any) { 
  return (_input !== null && _input !== undefined) 
};

export function str2Json(_input: string) { 
  try {
    return JSON.parse(isNN(_input) ? _input : "{}"); 
  } catch (ex) { 
    jsError(ex, "String2JSON"); 
    return {}; 
  } 
};

export function json2Str(_input: any) { 
  try {
    return (isNNObject(_input) ? JSON.stringify(_input) : "");
  } catch (ex) { 
    jsError(ex, "JSON2String"); 
    return ""; 
  }
};

export function jsError(_ex: any, _funName: string) {
   //alert("Javascript Error\n------------------\nName: " + _ex.name + "\nMessage: " + _ex.message + "\nFunction: " + _funName + "\nFile: " + _ex.fileName + "\nLine Number: " + _ex.lineNumber + "\nColumn Number: " + _ex.columnNumber); 
   console.log("Error:" + _funName + ":" + _ex);
};