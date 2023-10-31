package Test15.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test15.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: street
 */
@Entity(name = "IISTest15street")
@Table(schema = "public", name = "City")
public class street {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "имя")
    private String имя;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "city")
    @Convert("city")
    @Column(name = "city", length = 16, unique = true, nullable = false)
    private UUID _cityid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "city", insertable = false, updatable = false)
    private city city;


    public street() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getимя() {
      return имя;
    }

    public void setимя(String имя) {
      this.имя = имя;
    }


}