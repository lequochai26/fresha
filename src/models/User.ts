export default class User {
    // Static fields:
    private static testInstance: User = new User(`lequochai26@gmail.com`, `Abc123456`, `Le Quoc Hai`, `Hello, World!`, new Date(2003, 5, 5));

    // Static methods:
    public static getTestIntance(): User {
        return this.testInstance;
    }

    // Fields:
    private email: string;
    private password: string;
    private fullName: string;
    private description: string;
    private joinedDate: Date;

    // Constructors:
    public constructor(
        email?: string,
        password?: string,
        fullName?: string,
        description?: string,
        joinedDate?: Date
    ) {
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.description = description;
        this.joinedDate = joinedDate;
    }

    // Methods:
    public getAvatarName(): string {
        let avatarName: string = ""
        for (const name of this.fullName.split(" ")) {
            avatarName += name[0].toUpperCase();
        }
        return avatarName;
    }

    // Getters / setters:
    /**
     * Getter $username
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Setter $username
     * @param {string} value
     */
	public set $email(value: string) {
		this.email = value;
	}

    /**
     * Getter $password
     * @return {string}
     */
	public get $password(): string {
		return this.password;
	}

    /**
     * Setter $password
     * @param {string} value
     */
	public set $password(value: string) {
		this.password = value;
	}

    /**
     * Getter $fullName
     * @return {string}
     */
	public get $fullName(): string {
		return this.fullName;
	}

    /**
     * Setter $fullName
     * @param {string} value
     */
	public set $fullName(value: string) {
		this.fullName = value;
	}

    /**
     * Getter $description
     * @return {string}
     */
	public get $description(): string {
		return this.description;
	}

    /**
     * Setter $description
     * @param {string} value
     */
	public set $description(value: string) {
		this.description = value;
	}

    /**
     * Getter $joinedDate
     * @return {Date}
     */
	public get $joinedDate(): Date {
		return this.joinedDate;
	}

    /**
     * Setter $joinedDate
     * @param {Date} value
     */
	public set $joinedDate(value: Date) {
		this.joinedDate = value;
	}
}