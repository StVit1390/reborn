import { WidgetActions } from './slice';
import { useSelector, useDispatch } from '../../tools/hooks';

export const useWidget = () => {
    const dispatch = useDispatch();
    const widget = useSelector((state) => state.widget);

    const setId = (id:string) => {
        dispatch(WidgetActions.setId(id));
    };

    const loaderOn = () => {
        dispatch(WidgetActions.setLoaderOn());
    };
    const loaderOff = () => {
        dispatch(WidgetActions.setLoaderOff());
    };

    return {
        widget,
        setId,
        loaderOn,
        loaderOff,
    };
};
