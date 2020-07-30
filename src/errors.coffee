class ConsumerError extends Error
  constructor: (message) ->
    super(message)
class ExtensionError extends Error
  constructor: (message) ->
    super(message)
class StoreError extends Error
  constructor: (message) ->
    super(message)
class ParameterError extends Error
  constructor: (message) ->
    super(message)
class SignatureError extends Error
  constructor: (message) ->
    super(message)
class NonceError extends Error
  constructor: (message) ->
    super(message)
class OutcomeResponseError extends Error
  constructor: (message, @codeMinor) ->
    super message
    @message = message

module.exports =
  ConsumerError: ConsumerError
  ExtensionError: ExtensionError
  StoreError: StoreError
  ParameterError: ParameterError
  SignatureError: SignatureError
  NonceError: NonceError
  OutcomeResponseError: OutcomeResponseError
