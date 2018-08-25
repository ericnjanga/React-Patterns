
/**
 * [COMPONENTS] UTILITY FUNCTIONS
 * --------------------------
 */

/**
 * Return the display name of a wrapped component
 */
export const getCompDisplayName = (WrappedComponent) => {

  return WrappedComponent.displayName || WrappedComponent.name || 'Component';

};