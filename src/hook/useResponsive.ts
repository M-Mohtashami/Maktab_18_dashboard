import { BreakpointType } from "../types/types";
import { breakpoints } from "../utils/breakpoints";

export const useResponsive = (value:BreakpointType):boolean=>{
    let result = false;
    const width = window.innerWidth

    const breakpoint = breakpoints[value]

    result = width < breakpoint
    
    return result
    
}