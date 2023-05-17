import * as React from 'react'
import { ITextBoxProps, TextBox } from './text-box'
import { Button } from './button'
import { Octicon } from '../octicons'
import * as OcticonSymbol from '../octicons/octicons.generated'

interface IPasswordTextBoxState {
  /**
   * Whether or not the password is currently visible in the underlying input
   */
  readonly showPassword: boolean
}

/** An password input element with app-standard styles and a button for toggling
 * the visibility of the user password. */
export class PasswordTextBox extends React.Component<
  ITextBoxProps,
  IPasswordTextBoxState
> {
  private textBoxRef = React.createRef<TextBox>()

  public constructor(props: ITextBoxProps) {
    super(props)

    this.state = { showPassword: false }
  }

  private onTogglePasswordVisibility = () => {
    this.setState({ showPassword: !this.state.showPassword })
    this.textBoxRef.current!.focus()
  }

  public render() {
    const buttonIcon = this.state.showPassword
      ? OcticonSymbol.eye
      : OcticonSymbol.eyeClosed
    const type = this.state.showPassword ? 'text' : 'password'
    const props: ITextBoxProps = { ...this.props, ...{ type } }
    return (
      <div className="password-text-box">
        <TextBox {...props} ref={this.textBoxRef} />
        <Button
          ariaLabel="Toggle password visibility"
          tooltip="Toggle password visibility"
          onClick={this.onTogglePasswordVisibility}
        >
          <Octicon symbol={buttonIcon} />
        </Button>
      </div>
    )
  }
}
